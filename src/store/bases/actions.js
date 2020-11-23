
import api from "../../utils"
export async function login ({commit}, payload) {
    let {data} = await api.post("/api/v3/login", payload)
    commit("setUserInfo", data)
    commit("setIsLogin", true)
}

export async function logout ({commit}, payload) {
    commit("setUserInfo", {})
    commit("setIsLogin", false)
}

