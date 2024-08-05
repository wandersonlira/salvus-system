import { AxiosError } from "axios";
import { toast } from "react-toastify";



export function retornaErro(erro = AxiosError) {
    if (erro.response) {
        // O servidor respondeu com um status de erro
        if (erro.response.status === 404) {
          toast.error('Erro 404: ID não encontrado')
        } else {
          toast.error(`Erro ${erro.response.status}: ${erro.response.statusText}`)
        }
      } else if (erro.request) {
        // A requisição foi feita, mas não houve resposta
        toast.error('Sem resposta do servidor')
      } else {
        // Outro tipo de erro ocorreu na configuração da requisição
        toast.error('Erro ao configurar a requisição', erro.message)
      }
}
