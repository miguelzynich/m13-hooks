export function useValidation(validation, type) {

    switch (type) {
        case "empty":
            return validation? "Preencha todos os campos corretamente!": "";
        case "equal":
            return validation? "" : "As senhas não conferem!";
        case "cpf":
            return validation? "" : "CPF inválido!";
    }
}