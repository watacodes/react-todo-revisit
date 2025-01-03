import dayjs from "dayjs";

const dateFormatter = () => dayjs(new Date()).format("YYYY/MM/DD");

export default dateFormatter;
