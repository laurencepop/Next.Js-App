export default function (cookieArray: string[]) {
    document.cookie.split(";").forEach((cookie) => {
        const position = cookie.indexOf("=")
        const cookieName = position > -1 ? cookie.slice(0, position) : cookie

        cookieArray.includes(cookieName.trim()) &&
            (document.cookie =
                cookieName +
                "=;" +
                "domain=;" +
                "path=/;" +
                "expires=Thu, 01 Jan 1970 00:00:00 GMT;" +
                "secure=true;" +
                "samesite=Strict;")
    })
}

/*
import cookiesToDelete from "@/funcs/cookiesToDelete"
cookiesToDelete([ "xxx", "yyy", "zzz" ])
! cookies will get deleted if name in array above here
*/
