import {About} from '@/modules/Landing/About';
import {TextMe} from '@/modules/Landing/TextMe';
import {FAQ} from '@/modules/Landing/FAQ';
import {Features} from '@/modules/Landing/Features';
import {Footer} from '@/modules/Landing/Footer';
import {Hero} from '@/modules/Landing/Hero';
import {HowItWorks} from '@/modules/Landing/HowItWorks';
import {Navbar} from '@/modules/Landing/Navbar';
import {PurchaseRequestForm} from '@/modules/Landing/PurchaseRequestForm';
import {Pricing} from '@/modules/Landing/Pricing';
import {ScrollToTop} from '@/modules/Landing/ScrollToTop';
import React from 'react';
import {Templates} from '@/modules/Landing/Templates';

export default async function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Templates />
      <Features />
      <TextMe />
      {/* <Services /> */}
      <Pricing />
      <PurchaseRequestForm />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}
