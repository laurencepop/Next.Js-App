import chalk from "chalk"
import prependFile from "prepend-file"

export default async function Logger(error: any) {
    let logError
    if (Object.keys(error.err).length > 0) {
        //~ schema:
        if (error.err.code === 11000) {
            logError = `${Object.getOwnPropertyNames(
                error.err.keyPattern
            )} already taken`
        }
        //~ schema:
        if (error.err.errors) {
            logError =
                error.err.errors[Object.keys(error.err.errors)[0]].message
        }
        //~ joi:
        if (error.err.details) {
            logError = error.err.details[0].message
        }
    }

    // console.log(chalk.bgCyanBright(`Error-Type: ${typeof error.err}\n`))
    // console.log(chalk.bgYellow(`Org-Err-Obj:\n${error.err}\n`))
    // console.log(chalk.bgGray(`Org-Err-Obj-toStr:\n${JSON.stringify(error.err)}\n`))

    if (logError) {
        const errToStr = JSON.stringify(logError)
        const cleanErrStr = errToStr.replace(/[^a-zA-Z\d\@.:]+/gi, " ")
        logError = cleanErrStr.trim()
    } else {
        logError = error.err
    }
    console.log(chalk.bgRed(`Logger:\n${logError}\n`))

    await prependFile(
        "@/logs.txt",
        `\n${new Date().toLocaleString()}\n${logError}\n`
    )
    return logError
}
