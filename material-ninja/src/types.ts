export interface Note {
    title: string,
    details: string,
    category: string,
    id: number
}
export interface MenuItem {
    text: string,
    icon: JSX.Element,
    path: string
}

export interface functionProps  {
     (a: number):  void;
}
