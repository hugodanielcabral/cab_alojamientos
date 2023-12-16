const img = [
  "url(https://images.unsplash.com/photo-1499678329028-101435549a4e)",
  "url(https://images.unsplash.com/photo-1514539079130-25950c84af65)",
  "url(https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2)",
];
export const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div
        className="min-h-screen bg-center bg-cover shadow-sm hero shadow-black"
        style={{
          backgroundImage: img[Math.floor(Math.random() * img.length)],
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="p-0 text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-secondary">
              DonC Alojamientos
            </h1>
            <p className="mb-5 text-2xl">Encontrá tu próximo alojamiento</p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-3xl text-center ">
        <h2>Descubre tu próximo nuevo destino</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
          dolorum voluptatibus reprehenderit, harum delectus tempore adipisci
          minima maxime praesentium ex labore consectetur alias illo enim omnis
          incidunt laboriosam illum!
        </p>
      </div>
    </div>
  );
};
