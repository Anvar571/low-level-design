export function findByParam(data: any[], param: string): any | undefined {
    return data.find((val) => {
        return Object.keys(param).every(key => {
            return val[key] === param[key];
        })
    })
}

