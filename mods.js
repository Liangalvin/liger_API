var routes = {
  devSal: function(req, res){
    salaries = {
      min: "$34,103",
      median: "$58,583",
      max: "$88,736",
      descrip: "Salaries varies across 50 states"
    }

    res.send({salary: salaries});
  },

  pmSal: function(req, res){
    salaries = {
      min: "$45,676",
      median: "78,169",
      max: "111,392",
      descrip: "Salaries varies across 50 states"
    }

    res.send({salary: salaries});
  },

  desSal: function(req, res){
    salaries = {
      min: "47,119",
      median: "61,283",
      max: "73,238",
      descrip: "Salaries varies across 50 states"
    }

    res.send({salary: salaries});
  },

  listening: function (){
    console.log("Listening on port 3000");
  }
}

module.exports = routes;
