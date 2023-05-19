export default function cookieSet(
    cookieName: string,
    cookieValue: string | number | boolean,
    hoursValid: number
) {
    const DateNow = new Date()
    DateNow.setTime(DateNow.getTime() + hoursValid * 60 * 60 * 1000)
    const expire = DateNow.toUTCString()

    document.cookie =
        cookieName +
        "=" +
        encodeURIComponent(cookieValue) +
        ";" +
        "domain=;" +
        "path=/;" +
        "expires=" +
        expire +
        ";" +
        "secure=true;" +
        "samesite=Strict;"
}

/*
import cookieSet from "@/funcs/cookieSet"
cookieSet(cookieName,cookieValue,hoursValid)

* Use encodeURIComponent() & decodeURIComponent() to encode & decode t cookie vl

* 'domain' => ''
if not set valid on whole domain
else set path or subdomain like: domain.com, domain.com/xxx or folder.domain.com

* 'path'
if just '/' means for entire domain
don't leave empty like '' because it will be valid only for that particular path

* 'httponly' => false
if true, not accessible from the frontend through document.cookie
accessible only through the HTTP protocol, through backend scripts

'secure' => true, // if true gets set only if using https

'samesite' => 'Strict', // None || Lax || Strict
-> Strict means the cookie is only sent for requests originating from the same
URL as the current one. Forbids to sent the cookie to third party sites
-> Lax means the cookie is not sent on cross-site requests, but will be sent if
the user navigates to the origin site from an external site.
-> None means t cookie will be sent on both same-site & cross-site requests, but
can only be used if the Secure attribute is also set.

*/
