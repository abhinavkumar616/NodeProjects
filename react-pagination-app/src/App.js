import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './App.css'
import Model from './model';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 1,
            data: [],
            perPage: 2,
            currentPage: 1,
            totalPages:0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get("https://reqres.in/api/users?page="+this.state.currentPage)
            .then(res => {

                const pdata = res.data;
                console.log(pdata);

                const paggg=pdata.per_page;
                const total=pdata.total_pages;
                const current=pdata.page;

                console.log("hii"+total+" " +paggg+" "+current);
               
                
                
                const arry=pdata.data;

                console.log(arry);

                 const postData = arry.map(pd => 
                    
                    <Model id={pd.id} email={pd.email} first={pd.first_name} last={pd.last_name} src={pd.avatar}/>
                    )


                    this.setState({totalPages:total,
                        
                       
                        postData
                    })




                } )

                
            }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
    

    


        this.setState({
            currentPage: selectedPage+1,
    
        }, () => {
            this.receivedData()
        });

    };

   

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        );
    }
}
