import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="h-full flex flex-col gap-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        연락처
      </motion.h1>
      <div className="flex flex-col gap-y-4">
        <div className="flex-1 bg-white rounded-lg p-4 flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold flex items-center gap-x-2">
            <MdEmail />
            Email
          </h2>
          <p className="text-gray-600">lsy1127@example.com</p>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold flex items-center gap-x-2">
            <MdPhone />
            Phone
          </h2>
          <p className="text-gray-600">010-1234-5678</p>
        </div>
      </div>
    </div>
  );
}
