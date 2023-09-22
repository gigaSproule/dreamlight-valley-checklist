import { Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main>
      <Head>
        <title>Not Found</title>
      </Head>
      <Typography variant="h1">Page not found</Typography>
      <Typography>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link href="/">Go home</Link>.
      </Typography>
    </main>
  );
};

export default NotFoundPage;
