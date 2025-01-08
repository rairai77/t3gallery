import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/UXl0J6OC1Ne0FFGlfl1dL7oarftcM1eDK6OgsvpyUC5S9WlI",
  "https://utfs.io/f/UXl0J6OC1Ne0s5lMLG9TuiW7tgGxUJQDyM4ehsV0vc1AlHCK",
  "https://utfs.io/f/UXl0J6OC1Ne0ehlmRELdigsAqVJju1Yf89cQCye7RLxM5EkX",
  "https://utfs.io/f/UXl0J6OC1Ne0yYTASkcZNZRJ0aXqSlE4wpWGgv9xm7C8VztU",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => (<div className="w-48" key={image.id}>
            <img src={image.url}/>
          </div>))
        }
      </div>
    </main>
  );
}
