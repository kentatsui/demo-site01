import { Metadata } from "next";
import Section from "../about/components/section";

export const metadata: Metadata = {
  title: "contact",
  description: "でもデモサイト",
};

export default function Page() {
  return (
    <Section title="Contact" subTitle="contact-contact">
      <form action="" className="text-center">
        <input type="text" className="border rounded-md px-10" />
      </form>
    </Section>
  );
}
