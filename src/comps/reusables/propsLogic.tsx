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

export interface LableInput {
  data: {
    title: string,
    type: string,
    info: string,
    value: string
  }
}

export interface Text {
  text: string
}

export interface Credits {
  credits: {
    gehalt: number,
    zusatz: number
  },
  setCredits: (credits: {
    gehalt: number,
    zusatz: number
  }) => void,
}