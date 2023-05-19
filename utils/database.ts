import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log(`XXX: MongoDB already connected!`)
        return
    } else {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}`, {
                dbName: "xxxxxxxxxxxxxxxxxx",
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
            })

            isConnected = true
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
}

// usage: import { connectToDB } from '@/utils/database' => await connectToDB()
