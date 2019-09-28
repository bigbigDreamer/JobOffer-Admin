import  {request} from "../../tools"

// 查询所有

export const findAll = config => request.get("Business/findAll",config);

export const deleteById = (data,config) => request.post("Business/deleteById",data,config);