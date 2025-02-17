"use client"

import { Card, CardContent, Box, Typography } from "@mui/material"
import { PageContainer } from "@/app/theme"
import Image from "next/image"
import Link from "next/link"

export default function TechyStuff(): JSX.Element {
  return (
    <PageContainer>
      <Typography variant="h1">TECHY STUFF</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card
          sx={{
            width: { xs: "350px", md: "1200px" },
            padding: "30px",
            marginBottom: "30px"
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography variant="h2">PASSING</Typography>
            <Typography variant="body1">
              A 2D narrative driven, open-world game made in Unity.
            </Typography>
            <iframe
              title="Passing"
              width="100%"
              height="167"
              src="https://itch.io/embed/1494203"
            ></iframe>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: { xs: "350px", md: "1200px" },
            padding: "30px"
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography variant="h2">3D DICE ROLLER</Typography>
            <Typography variant="body1">
              A lil html/css/javascript web app! In all its source code glory so
              you can play around with it.
            </Typography>
            <Link
              href="https://realtimehtml.com/#code=PGgzPldlbGNvbWUgdG8gdGhlIHJlYWwtdGltZSBIVE1MIGVkaXRvciE8L2gzPgo8IURPQ1RZUEUgaHRtbD4KPGh0bWw+CjxoZWFkPgogIDxzdHlsZT4KICAgIGJvZHkgewogICAgICBiYWNrZ3JvdW5kOiAjMTExOwogICAgICBjb2xvcjogd2hpdGU7CiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgbWluLWhlaWdodDogMTAwdmg7CiAgICAgIG1hcmdpbjogMDsKICAgICAgcGFkZGluZzogMjBweDsKICAgIH0KCiAgICAuc2NlbmUgewogICAgICB3aWR0aDogMjAwcHg7CiAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgIG1hcmdpbjogNTBweDsKICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDsKICAgIH0KCiAgICAuY3ViZSB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsKICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNS4yNjRkZWcpIHJvdGF0ZVkoNDVkZWcpOwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDsKICAgIH0KCiAgICAuZmFjZSB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgd2lkdGg6IDIwMHB4OwogICAgICBoZWlnaHQ6IDIwMHB4OwogICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGZvbnQtc2l6ZTogNDhweDsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgb3BhY2l0eTogMC45NTsKICAgIH0KCiAgICAuZnJvbnQgIHsgCiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7IAogICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC45KTsgIC8qIFJlZCAqLwogICAgfQogICAgLmJhY2sgICB7IAogICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTsKICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuOSk7ICAvKiBHcmVlbiAqLwogICAgfQogICAgLnJpZ2h0ICB7IAogICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpOwogICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC45KTsgIC8qIEJsdWUgKi8KICAgIH0KICAgIC5sZWZ0ICAgeyAKICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCk7CiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuOSk7ICAvKiBZZWxsb3cgKi8KICAgIH0KICAgIC50b3AgICAgeyAKICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTsKICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDI1NSwgMC45KTsgIC8qIE1hZ2VudGEgKi8KICAgIH0KICAgIC5ib3R0b20geyAKICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCk7CiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAyNTUsIDAuOSk7ICAvKiBDeWFuICovCiAgICB9CgogICAgYnV0dG9uIHsKICAgICAgbWFyZ2luLXRvcDogNTBweDsKICAgICAgcGFkZGluZzogMTJweCAyNHB4OwogICAgICBmb250LXNpemU6IDE4cHg7CiAgICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgYm9yZGVyOiBub25lOwogICAgICBib3JkZXItcmFkaXVzOiA0cHg7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzOwogICAgfQoKICAgIGJ1dHRvbjpob3ZlciB7CiAgICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7CiAgICB9CgogICAgLnJlc3VsdCB7CiAgICAgIGZvbnQtc2l6ZTogMjRweDsKICAgICAgbWFyZ2luLXRvcDogMjBweDsKICAgIH0KICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogIDxkaXYgY2xhc3M9InNjZW5lIj4KICAgIDxkaXYgY2xhc3M9ImN1YmUiPgogICAgICA8ZGl2IGNsYXNzPSJmYWNlIGZyb250Ij5BbGJpZTwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJmYWNlIGJhY2siPkF6YXJpYWg8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZmFjZSByaWdodCI+RGV2ZW48L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZmFjZSBsZWZ0Ij5MYXVyYTwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJmYWNlIHRvcCI+TWFkaXNvbjwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJmYWNlIGJvdHRvbSI+VGF5bGVyPC9kaXY+CiAgICA8L2Rpdj4KICA8L2Rpdj4KICA8YnV0dG9uIG9uY2xpY2s9InJvbGxEaWNlKCkiPlJvbGwgRGljZTwvYnV0dG9uPgogIDxkaXYgY2xhc3M9InJlc3VsdCI+PC9kaXY+CgogIDxzY3JpcHQ+CiAgICBjb25zdCBjdWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUnKTsKICAgIGNvbnN0IHJlc3VsdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7CiAgICBsZXQgaXNSb2xsaW5nID0gZmFsc2U7CgogICAgY29uc3QgZmFjZVJvdGF0aW9ucyA9IHsKICAgICAgMTogJ3JvdGF0ZVgoNTQuNzNkZWcpIHJvdGF0ZVooNDVkZWcpJywKICAgICAgNjogJ3JvdGF0ZVgoMTgwZGVnKSByb3RhdGVaKDE4MGRlZykgcm90YXRlWCgtNTQuNzNkZWcpIHJvdGF0ZVooLTQ1ZGVnKScsCiAgICAgIDI6ICdyb3RhdGVZKC05MGRlZykgcm90YXRlWigtNTQuNzNkZWcpIHJvdGF0ZVgoLTQ1ZGVnKScsCiAgICAgIDU6ICdyb3RhdGVZKDkwZGVnKSByb3RhdGVaKDU0LjczZGVnKSByb3RhdGVYKDQ1ZGVnKScsCiAgICAgIDM6ICdyb3RhdGVYKC0zNS4yNjRkZWcpIHJvdGF0ZVkoLTQ1ZGVnKScsCiAgICAgIDQ6ICdyb3RhdGVYKDE0NWRlZykgcm90YXRlWSgtNDVkZWcpJwogICAgfTsKCiAgICBjb25zdCBmYWNlVG9OYW1lID0gewogICAgICAxOiAnQWxiaWUnLAogICAgICA2OiAnQXphcmlhaCcsCiAgICAgIDI6ICdEZXZlbicsCiAgICAgIDU6ICdMYXVyYScsCiAgICAgIDM6ICdNYWRpc29uJywKICAgICAgNDogJ1RheWxlcicKICAgIH07CgogICAgZnVuY3Rpb24gZ2V0UmFuZG9tUm90YXRpb24oKSB7CiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApOwogICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTsKICAgICAgY29uc3QgeiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MCk7CiAgICAgIHJldHVybiBgcm90YXRlWCgke3h9ZGVnKSByb3RhdGVZKCR7eX1kZWcpIHJvdGF0ZVooJHt6fWRlZylgOwogICAgfQoKICAgIGZ1bmN0aW9uIHJvbGxEaWNlKCkgewogICAgICBpZiAoaXNSb2xsaW5nKSByZXR1cm47CiAgICAgIGlzUm9sbGluZyA9IHRydWU7CiAgICAgIAogICAgICByZXN1bHREaXNwbGF5LnRleHRDb250ZW50ID0gIlJvbGxpbmcuLi4iOwogICAgICAKICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxOwogICAgICAKICAgICAgLy8gQ3JlYXRlIHJhbmRvbSByb3RhdGlvbnMgZHVyaW5nIHRoZSByb2xsCiAgICAgIGN1YmUuc3R5bGUudHJhbnNmb3JtID0gZ2V0UmFuZG9tUm90YXRpb24oKTsKICAgICAgbGV0IHJvbGxUaW1lID0gMDsKICAgICAgY29uc3Qgcm9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gewogICAgICAgIGN1YmUuc3R5bGUudHJhbnNmb3JtID0gZ2V0UmFuZG9tUm90YXRpb24oKTsKICAgICAgICByb2xsVGltZSArPSAyMDA7CiAgICAgICAgCiAgICAgICAgaWYgKHJvbGxUaW1lID49IDQwMDApIHsKICAgICAgICAgIGNsZWFySW50ZXJ2YWwocm9sbEludGVydmFsKTsKICAgICAgICAgIC8vIFNldCBmaW5hbCByb3RhdGlvbiBmb3IgdGhlIHJlc3VsdAogICAgICAgICAgY3ViZS5zdHlsZS50cmFuc2Zvcm0gPSBmYWNlUm90YXRpb25zW3Jlc3VsdF07CiAgICAgICAgICByZXN1bHREaXNwbGF5LnRleHRDb250ZW50ID0gYFlvdSByb2xsZWQgYSAke3Jlc3VsdH0hIFRoYXQncyAke2ZhY2VUb05hbWVbcmVzdWx0XX0uYDsKICAgICAgICAgIGlzUm9sbGluZyA9IGZhbHNlOwogICAgICAgIH0KICAgICAgfSwgMjAwKTsKICAgIH0KICA8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+"
              className="cursor-pointer inline-block"
            >
              <Image
                src={"/media/3d-dice.png"}
                width={380}
                height={420}
                alt="3d dice."
                style={{ borderRadius: "7%" }}
              />
            </Link>
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  )
}
