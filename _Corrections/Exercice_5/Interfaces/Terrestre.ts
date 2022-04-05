import MilieuNaturel from "./MilieuNaturel";

export default interface Terrestre extends MilieuNaturel {
    respirerHorsDeLeau(): void;
    marcher(): void;
}