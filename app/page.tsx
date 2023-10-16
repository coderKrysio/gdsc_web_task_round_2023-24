import { Navbar } from '@/components/navbar';
import { Camera } from 'lucide-react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-white text-black p-24">
			<Navbar />
			gdsc task round
			<Camera color="red" size={48} />
		</main>
	)
}
