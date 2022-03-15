export default (req, res) => {
  if(req.method === "GET"){
    res.status(200).json({NOME: "João" })
  }else {
    res.status(200).json({NOME: "Maria" })
  }
  
}