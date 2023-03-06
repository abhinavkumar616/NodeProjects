const docModel = require("../models/docModel")

const postDocController = async (req, res) => {

    try {

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const isValidEmail = emailRegex.test(req.body.email);

        if (isValidEmail === false) {
            console.log("email is not correct");
            throw new Error("Please write correct email id")
        }
        else {

            var data = new docModel(req.body)
            await data.save()
            res.send({
                result: "Done",
                data: data
            })
        }


        
        // let x = req.file.originalname;

            // var data = new docModel(req.body)
            // console.log(req.file.originalname);
            // const data1 = await docModel.create({x})
            // await data1.save()
            // await data.save()
            // res.send({
            //     result: "Done",
            //     data: data
            // })

            // var data = new docModel(req.body)
            // await data.save()
            // res.send({
            //     result: "Done",
            //     data: data
            // })

    }
    catch (error) {

        res.status(500).send({
            result: "Fail",
            error:error.message
            
        })

    }

}

module.exports = postDocController