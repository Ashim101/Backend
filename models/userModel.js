import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },



    image: {
        type: String,
        default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA2NiA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY2IiBoZWlnaHQ9IjY1IiByeD0iMTAiIGZpbGw9IiNGNkY4RkYiLz4KPHBhdGggZD0iTTI2LjYxMyAyNi4xNDk5TDI2Ljg0MDUgMjYuMTMwNEMyNi45MjY3IDI2LjEyMDcgMjcuMDA0NyAyNi4wODk4IDI3LjA2OTcgMjYuMDQ0M0wyNy4wNjggMjYuMDQ1OUMyNy4yODU4IDI2Ljc5NjcgMjcuNTUyMyAyNy41ODY1IDI3Ljg4NTQgMjguNDEzNkMyOC4zMTI4IDI5LjQ5NTkgMjguNzMzNyAzMC4zODQ4IDI5LjIwNSAzMS4yNDI4TDI5LjE0IDMxLjExMjhDMjkuMTAxIDMxLjcwNDMgMjkuMDUzOSAzMi4zMTIxIDI4Ljk5MjEgMzIuOTAwNEMyOC45NjI4IDMzLjI2MjggMjguODkxMyAzMy42MDA4IDI4Ljc4MjUgMzMuOTE5M0wyOC43OTA2IDMzLjg5QzI4Ljc3MTEgMzMuODk4MiAyOC43NDM1IDM3LjI3MDEgMjguNzQzNSAzNy4yNzAxQzI4Ljc0NTEgMzkuNDY4OCAzMC4yNjc4IDQxLjMxIDMyLjMxNTMgNDEuNzk5MkwzMi4zNDc4IDQxLjgwNTdDMzIuNDQwNSA0MS41NyAzMi42NjQ3IDQxLjQwNTkgMzIuOTI4IDQxLjQwNTlIMzMuODYwOEMzNC4xMjI0IDQxLjQwOTEgMzQuMzQ2NiA0MS41NzE2IDM0LjQzOTMgNDEuODAwOEwzNC40NDA5IDQxLjgwNTdDMzYuNTI1OCA0MS4zMTQ5IDM4LjA1NSAzOS40NzM3IDM4LjA2MzEgMzcuMjczNEMzOC4wNjMxIDM3LjI3MzQgMzguMDA2MyAzMy45MTQ0IDM3Ljk3NyAzMy44OTE3QzM3Ljg4NzYgMzMuNjA3MyAzNy44MTYxIDMzLjI3MjUgMzcuNzc4NyAzMi45MjhMMzcuNzc3MSAzMi45MDM2QzM3LjcyMDIgMzIuMzEyMSAzNy42ODI5IDMxLjcxOSAzNy42MjkyIDMxLjExNjFDMzguMDMwNiAzMC4zOTEzIDM4LjQ1MTUgMjkuNTA0IDM4LjgyMiAyOC41ODkxTDM4Ljg4MzggMjguNDE2OUMzOS4yMTY5IDI3LjU4OTcgMzkuNDc1MyAyNi44MDE2IDM5LjcwMTIgMjYuMDQ5MkMzOS43NjQ2IDI2LjA5NDcgMzkuODQyNiAyNi4xMjU1IDM5LjkyNzEgMjYuMTM1M0gzOS45Mjg3TDQwLjE1NzggMjYuMTU0OEM0MC40MzQxIDI2LjE4NCA0MC42Nzc4IDI1Ljk1NjUgNDAuNzAwNiAyNS42MDM5TDQwLjk0NzYgMjIuNDY1OUM0MC45NDc2IDIyLjQ2NDMgNDAuOTQ3NiAyMi40NjI3IDQwLjk0NzYgMjIuNDYyN0M0MC45NDc2IDIyLjE5NzggNDAuNzQ5MyAyMS45OCA0MC40OTQyIDIxLjk0NzVINDAuNDkxSDQwLjQ2MzNDNDAuNTI2NyAyMS40OTA5IDQwLjU2MjUgMjAuOTY0NCA0MC41NjI1IDIwLjQyOTdDNDAuNTYyNSAxOS4yNjI5IDQwLjM5MDIgMTguMTM1MiA0MC4wNzAxIDE3LjA3NEw0MC4wOTEyIDE3LjE1NjlDMzkuMTUzNSAxNS4wOTk2IDM3LjI5NDUgMTMuNjA2MSAzNS4wNTUyIDEzLjE4ODVMMzUuMDEyOSAxMy4xODJDMzQuNTMxOSAxMy4wODI5IDMzLjk3MTMgMTMuMDE2MyAzMy4zOTkyIDEzSDMzLjM4NDZIMzMuMzY1MUMzMi43ODE3IDEzLjAxMTQgMzIuMjIxMSAxMy4wNzY0IDMxLjY3ODMgMTMuMTkxOEwzMS43MzY4IDEzLjE4MkMyOS40NTg1IDEzLjYxMSAyNy42MDI3IDE1LjEwNDQgMjYuNjc2NCAxNy4xMTNMMjYuNjU4NSAxNy4xNTY5QzI2LjM1NjMgMTguMTMxOSAyNi4xODI0IDE5LjI1MzIgMjYuMTgyNCAyMC40MTM1QzI2LjE4MjQgMjAuOTU0NiAyNi4yMTk4IDIxLjQ4NzYgMjYuMjkyOSAyMi4wMDc3TDI2LjI4NjQgMjEuOTQ3NUMyNi4wMjggMjEuOTc2OCAyNS44MjgxIDIyLjE5MjkgMjUuODI4MSAyMi40NTYyVjIyLjQ2NzVMMjYuMDc1MSAyNS42MDU1QzI2LjA5NzkgMjUuOTY2MyAyNi4zNDQ5IDI2LjE4NCAyNi42MTE0IDI2LjE1NDhMMjYuNjEzIDI2LjE0OTlaIiBmaWxsPSIjRjdERUNFIi+CjxwYXRoIGQ9Ik01MC44MDM0IDQ2LjkxNzFDNTAuNjg5NyA0MS45NzcgNTAuMTk1NyA0MC44NTkgNDkuOTI5MSA0MC4xMDE3QzQ5LjgyMzUgMzkuNzk3OCA0OS43Mzc0IDM3Ljc0MzcgNDYuMzQ0MyAzNi40MTEyQzQ0LjI2NDIgMzUuNTkyMiA0MS41Nzk2IDM1LjU3NTkgMzkuMzA3OCAzNC42MTU1VjM3LjI4NzFDMzkuMzAyOSA0MC4xNjAyIDM3LjI0NTYgNDIuNTUwNiAzNC41MjM3IDQzLjA3MjNMMzQuNDg2MyA0My4wNzg4QzM0LjQzNTkgNDMuMzc0NSAzNC4xODI0IDQzLjU5NTUgMzMuODc4NSA0My41OTg4SDMzLjg0OTNWNDUuNjEzOUMzMy44NDkzIDQ3LjU4MzQgMzUuNDQ1MSA0OS4xNzkyIDM3LjQxNDYgNDkuMTc5MkMzOS4zODQyIDQ5LjE3OTIgNDAuOTggNDcuNTgzNCA0MC45OCA0NS42MTM5VjQ0LjIwNjZDMzkuOTkyIDQ0LjA1ODcgMzkuMjQyOCA0My4yMTY5IDM5LjI0MjggNDIuMTk5NkMzOS4yNDI4IDQxLjA4IDQwLjE1MTIgNDAuMTcxNiA0MS4yNzA5IDQwLjE3MTZDNDIuMzkwNSA0MC4xNzE2IDQzLjI5ODkgNDEuMDggNDMuMjk4OSA0Mi4xOTk2QzQzLjI5ODkgNDMuMDg2OSA0Mi43Mjg1IDQzLjg0MDkgNDEuOTM1NSA0NC4xMTcyTDQxLjkyMDkgNDQuMTIyMVY0NS42MTM5VjQ1LjY5MDJDNDEuOTIwOSA0OC4xNzk4IDM5LjkwMjYgNTAuMTk4MSAzNy40MTMgNTAuMTk4MUMzNC45MjM0IDUwLjE5ODEgMzIuOTA1MSA0OC4xNzk4IDMyLjkwNTEgNDUuNjkwMkMzMi45MDUxIDQ1LjY2MjYgMzIuOTA1MSA0NS42MzY2IDMyLjkwNTEgNDUuNjA5VjQ1LjYxMjJWNDMuNTc5M0MzMi42MTU5IDQzLjU1OTggMzIuMzgxOSA0My4zNDIgMzIuMzM2MyA0My4wNjI1VjQzLjA1OTNDMjkuNTkgNDIuNTI0NiAyNy41NDI0IDQwLjE0MjMgMjcuNTM1OSAzNy4yODA2VjM0LjU4NzlDMjUuMjU0NCAzNS41Njc4IDIyLjU1MzUgMzUuNTg3MyAyMC40NjIxIDM2LjQwNzlDMTcuMDU5MiAzNy43Mzg5IDE2Ljk4MTIgMzkuNzg4MSAxNi44NzcyIDQwLjA5NjhDMTYuNjE3MiA0MC44NTczIDE2LjExNjcgNDEuOTcwNSAxNi4wMDMgNDYuOTEzOUMxNS45ODM1IDQ3LjU2MzkgMTYuMDAzIDQ4LjU2MDEgMTcuOTYyOCA0OS40MzExQzIyLjIzMDIgNTEuMTA0OSAyNy43Mjc3IDUxLjYyNDkgMzMuMTQ3MiA1MS45OTg3SDMzLjY2NzNDMzkuMDk4MiA1MS42MjgyIDQ0LjU4NzYgNTEuMTA5OCA0OC44NTE3IDQ5LjQzMTFDNTAuODAzNCA0OC41NjQ5IDUwLjgyMTMgNDcuNTczNyA1MC44MDM0IDQ2LjkxNzFaTTI2Ljk0NjEgNDQuOTAyMUgyNC45MjEyVjQ2LjkzNUgyMy40NzQ5VjQ0LjkwODZIMjEuNDUwMVY0My40NjIzSDIzLjQ3NDlWNDEuNDM3NUgyNC45MjEyVjQzLjQ2MjNIMjYuOTQ2MVY0NC45MDIxWiIgZmlsbD0iIzU3N0NGRiIvPgo8cGF0aCBkPSJNNDIuMzY3IDQyLjE4MzJDNDIuMzY3IDQxLjU3ODcgNDEuODc3OSA0MS4wODc5IDQxLjI3MzMgNDEuMDg3OUM0MC42Njg4IDQxLjA4NzkgNDAuMTc5NyA0MS41NzcgNDAuMTc5NyA0Mi4xODE2QzQwLjE3OTcgNDIuNzg2MSA0MC42Njg4IDQzLjI3NTIgNDEuMjczMyA0My4yNzUyQzQxLjg3NjIgNDMuMjc1MiA0Mi4zNjU0IDQyLjc4NjEgNDIuMzY3IDQyLjE4MzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K'

    },


    address: {
        type: Object,
        default: {
            line1: "",
            line2: ""
        }

    },

    dob: {
        type: String,
        required: true,
        default: "Not selected"
    },

    gender: {
        type: String,
        default: "Not selected"

    },
    phone: {
        type: String,
        default: "0000000000"

    }

}, { minimize: false })



const userModel = mongoose.model('user', userSchema)

export default userModel