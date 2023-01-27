function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
