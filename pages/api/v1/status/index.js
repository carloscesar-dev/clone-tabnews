function status(request, response) {
  response.status(200).json({ Valor: "Alunos na média" })
}

export default status;