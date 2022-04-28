import Card from "../Card/Card";

const Product = () => {
  return (
    <>
      <h1 className="px-3 md:px-10 py-10 text-5xl font-bold text-center">Produk</h1>
      <div className="justify-center px-3 pt-10 pb-10 mb-10 md:gap-x-5 md:px-10 md:grid md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Ujian Online"
          description="Ujian berbasis komputer dengan pilihan ganda acak"
        />
        <Card
          title="Sistem Absensi"
          description="Sistem absensi menggunakan IoT RFID"
        />
        <Card
          title="Sistem Akademik"
          description="Sistem sekolah yang meliputi pembayaran SPP, penggajian dll terintegrasi dengan payment gateway"
        />
        <Card
          title="Sistem Perpustakaan"
          description="Sistem perpustakaan yang dilengkapi dengan pembayaran denda yang terintegrasi payment gateway"
        />
      </div>
    </>
  );
};

export default Product;
