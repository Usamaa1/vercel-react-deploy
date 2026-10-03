import axios from 'axios'
import React from 'react'

export const Api = axios.create({
    baseURL: "https://ediu.vercel.app/api/v1/",
    withCredentials: true
}
)

