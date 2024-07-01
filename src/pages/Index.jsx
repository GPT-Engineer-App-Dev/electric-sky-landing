import { Button } from "@/components/ui/button";

function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Lightning Storms</h1>
        <p className="text-lg mb-8">
          Discover the power and beauty of nature's most electrifying phenomena.
        </p>
        <Button variant="primary" size="lg">
          Learn More
        </Button>
      </div>
    </main>
  );
}

export default Index;