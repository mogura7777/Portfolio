/** @format */

import { Layout } from "src/components/Layout";
import { Nopage } from "src/components/Nopage";
import { AuthGuard } from "src/feature/auth/component/AuthGuard/AuthGuard";
export default function Contact() {
  return (
    <Layout title="Contact">
      <Nopage></Nopage>
    </Layout>
  );
}
