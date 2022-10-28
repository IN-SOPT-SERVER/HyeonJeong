import { series } from "../model/data";

const getSeries = async (seriesId: string) => {
    return series[seriesId]
};

export default { getSeries };