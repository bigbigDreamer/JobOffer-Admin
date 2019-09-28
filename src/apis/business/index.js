import  {request} from "../../tools"

// 查询所有

export const findAll = (config) => request.get("Business/findAll",config);