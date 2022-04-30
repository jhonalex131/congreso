import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>{process.env.APP_NAME}</title>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="ICT Combiner, Web Development, Web, Development, Service, Web Apps"
      />
      <meta name="author" content="ICT Combiner" />
      <meta name="robots" content="Service" />
      <meta property="og:title" content="ICT Combiner" />
      <meta
        property="description"
        content="ICT Combiner adalah perusahaan pengembangan web yang berlokasi di
                Bandung, Jawa Barat. Kami memiliki pengalaman bertahun-tahun dalam
                layanan pengembangan web maupun aplikasi mobile. Kami memiliki
                catatan yang terbukti dalam memberikan solusi aplikasi web yang
                kompleks, mulai dari perencanaan, desain, pengerjaan hingga
                pemeliharaan."
      />
      <meta
        property="og:description"
        content="ICT Combiner adalah perusahaan pengembangan web yang berlokasi di
                Bandung, Jawa Barat. Kami memiliki pengalaman bertahun-tahun dalam
                layanan pengembangan web maupun aplikasi mobile. Kami memiliki
                catatan yang terbukti dalam memberikan solusi aplikasi web yang
                kompleks, mulai dari perencanaan, desain, pengerjaan hingga
                pemeliharaan."
      />
    </Head>
  );
};

export default Header;
