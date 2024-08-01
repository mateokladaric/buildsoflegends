export default function Footer() {
    return (
        <footer className="w-full fixed bottom-0 bg-black flex justify-center mt-4">
            <h4 className="text-2xl p-2">&copy; {new Date().getFullYear()} <a>Klada.net</a></h4>
        </footer>
    );
}