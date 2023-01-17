type Usuario = {
  idade: number
}

function mostraIdadeDoUsuario(usuario: Usuario) {
  return usuario.idade
}

const usuario = {
  name: "Diego",
  idade: 28
}

mostraIdadeDoUsuario(usuario)

const usuario2 = {
  name: "Diego",
}
mostraIdadeDoUsuario: (usuario2)