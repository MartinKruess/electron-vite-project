export interface IProps {
    login: boolean,
    setLogin: (login: boolean) => void,
}

export interface AllCards {
    card: {
    title: string,
    type: string,
    sum: number,
    rate: number,
    start: string,
    end: string
  }
}