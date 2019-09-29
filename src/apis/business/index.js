import {request} from "../../tools"

// 查询所有
export const findAll = config => request.get("Business/findAll", config);

// 删除id
export const deleteById = (data, config) => request.post("Business/deleteById", data, config);