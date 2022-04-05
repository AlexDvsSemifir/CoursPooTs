export default interface Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    display(): void;
}