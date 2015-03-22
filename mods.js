var routes = {
  devSal: function(req, res){
    salaries = {
      min: 34103,
      median: 58583,
      max: 88736,
      descrip: "A web designer/developer is responsible for the design, layout and coding of a website. They are involved with the technical and graphical aspects of a website - how the site works and how it looks. They can also be involved with the maintenance and update of an existing site."
    }

    res.send({salary: salaries});
  },

  pmSal: function(req, res){
    salaries = {
      min: 45676,
      median: 78169,
      max: 111392,
      descrip: "The Product Manager is responsible for the product planning and execution throughout the product lifecycle, including: gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing and support to ensure revenue and customer satisfaction goals are met. The Product Manager’s job also includes ensuring that the product supports the company’s overall strategy and goals."
    }

    res.send({salary: salaries});
  },

  desSal: function(req, res){
    salaries = {
      min: 47119,
      median: 61283,
      max: 73238,
      descrip: "UX designers are primarily concerned with how the product feels. A given design problem has no single right answer. UX designers explore many different approaches to solving a specific user problem. The broad responsibility of a UX designer is to ensure that the product logically flows from one step to the next. One way that a UX designer might do this is by conducting in-person user tests to observe one's behavior. By identifying verbal and nonverbal stumbling blocks, they refine and iterate to create the \"best\" user experience."
    }

    res.send({salary: salaries});
  },

  listening: function (){
    console.log("Listening on port 3000");
  }
}

module.exports = routes;
