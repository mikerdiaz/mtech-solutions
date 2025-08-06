export default function Footer() {
  return (
    <footer
      className="bg-primary text-white dark:bg-primary dark:text-white text-center py-6 mt-12 transition-colors duration-300"
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} EvoNet IP. All rights reserved.
      </p>
    </footer>
  );
}