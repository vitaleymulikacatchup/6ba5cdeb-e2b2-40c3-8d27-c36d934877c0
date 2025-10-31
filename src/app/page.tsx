"use client"

import { Award, Car, CheckCircle, CreditCard, DollarSign, HelpCircle, MessageSquare, Phone, Shield, Star, Users } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoPrime"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Find Your Dream Car Today"
          description="Discover premium vehicles from trusted brands with competitive pricing and exceptional service. Your perfect car awaits at AutoPrime."
          tag="Premium Dealership"
          tagIcon={Star}
          buttons={[
            { text: "View Inventory", href: "product" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium luxury car in modern showroom"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose AutoPrime"
          description="With over 20 years of experience in the automotive industry, we provide exceptional service and premium vehicles to satisfied customers."
          tag="About Us"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Certified Quality",
              description: "Every vehicle undergoes rigorous inspection and certification",
              icon: Shield
            },
            {
              title: "Best Prices",
              description: "Competitive pricing with transparent, no-hidden-fee policy",
              icon: DollarSign
            },
            {
              title: "Expert Service",
              description: "Professional automotive experts guide you every step",
              icon: Users
            },
            {
              title: "Warranty Coverage",
              description: "Comprehensive warranty and after-sales support included",
              icon: CheckCircle
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional automotive expert"
          imagePosition="right"
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Inventory"
          description="Explore our curated selection of premium vehicles, each carefully inspected and certified for quality and performance."
          tag="Premium Selection"
          tagIcon={Car}
          products={[
            {
              id: "1",
              name: "BMW M5 Competition",
              price: "$89,500",
              imageSrc: "https://images.pexels.com/photos/13101559/pexels-photo-13101559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW M5 Competition luxury sedan"
            },
            {
              id: "2",
              name: "Ferrari 488 GTB",
              price: "$285,000",
              imageSrc: "https://images.pexels.com/photos/15824810/pexels-photo-15824810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari 488 GTB sports car"
            },
            {
              id: "3",
              name: "Range Rover Vogue",
              price: "$125,000",
              imageSrc: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Range Rover Vogue luxury SUV"
            },
            {
              id: "4",
              name: "Tesla Model S Plaid",
              price: "$115,000",
              imageSrc: "https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tesla Model S Plaid electric sedan"
            }
          ]}
          buttons={[
            { text: "View All Inventory", href: "https://autoprime.com/inventory" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Financing Options"
          description="Flexible financing solutions tailored to your budget and needs. Drive away in your dream car today."
          tag="Financing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "standard",
              price: "3.9% APR",
              name: "Standard Financing",
              features: [
                "36-60 month terms",
                "No prepayment penalty",
                "Online pre-approval",
                "Competitive rates"
              ],
              buttons: [
                { text: "Apply Now", href: "https://autoprime.com/financing" },
                { text: "Learn More", href: "contact" }
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "2.9% APR",
              name: "Premium Financing",
              features: [
                "12-84 month terms",
                "Lower monthly payments",
                "VIP customer service",
                "Extended warranty options",
                "Gap insurance included"
              ],
              buttons: [
                { text: "Get Started", href: "https://autoprime.com/premium" },
                { text: "Contact Sales", href: "contact" }
              ]
            },
            {
              id: "lease",
              price: "1.9% APR",
              name: "Lease Program",
              features: [
                "24-48 month lease terms",
                "Low down payment",
                "Mileage packages available",
                "Upgrade options",
                "Maintenance included"
              ],
              buttons: [
                { text: "Explore Leasing", href: "https://autoprime.com/lease" },
                { text: "Schedule Call", href: "contact" }
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Our experienced automotive professionals are here to help you find the perfect vehicle and provide exceptional service."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Sales Manager",
              description: "15+ years in luxury automotive sales with expertise in premium brands and customer satisfaction.",
              imageSrc: "https://images.pexels.com/photos/4895435/pexels-photo-4895435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez, Sales Manager",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/michaelrodriguez" },
                { icon: "Mail", url: "mailto:michael@autoprime.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Finance Director",
              description: "Certified automotive finance expert helping customers secure the best financing options for their dream cars.",
              imageSrc: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Thompson, Finance Director",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahthompson" },
                { icon: "Phone", url: "tel:+1234567890" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with AutoPrime."
          tag="Customer Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "David Johnson",
              role: "Business Owner",
              company: "Johnson Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Johnson customer testimonial"
            },
            {
              id: "2",
              name: "Emily Chen",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4173201/pexels-photo-4173201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Chen customer testimonial"
            },
            {
              id: "3",
              name: "Robert Martinez",
              role: "Entrepreneur",
              company: "Martinez Holdings",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4173192/pexels-photo-4173192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Martinez customer testimonial"
            },
            {
              id: "4",
              name: "Jessica Williams",
              role: "Executive",
              company: "Global Dynamics",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4173201/pexels-photo-4173201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jessica Williams customer testimonial"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about buying, financing, and servicing your vehicle with AutoPrime."
          tag="Support"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/6817005/pexels-photo-6817005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="AutoPrime dealership interior"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What financing options are available?",
              content: "We offer competitive financing through multiple lenders with rates starting as low as 1.9% APR. Our finance team will work with you to find the best option for your budget and credit situation."
            },
            {
              id: "2",
              title: "Do you accept trade-ins?",
              content: "Yes! We accept trade-ins and offer competitive valuations. Our appraisal team will evaluate your current vehicle and apply its value toward your new purchase."
            },
            {
              id: "3",
              title: "What warranty coverage is included?",
              content: "All our vehicles come with comprehensive warranty coverage. New cars include manufacturer warranty, and pre-owned vehicles come with our certified pre-owned warranty program."
            },
            {
              id: "4",
              title: "Can I schedule a test drive?",
              content: "Absolutely! You can schedule a test drive online or by calling our showroom. We recommend booking in advance to ensure your preferred vehicle is available."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          title="Ready to Find Your Perfect Car?"
          description="Get in touch with our automotive experts today. We're here to help you find the ideal vehicle and financing solution."
          tag="Contact Us"
          tagIcon={Phone}
          imageSrc="https://images.pexels.com/photos/6817005/pexels-photo-6817005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car dealership showroom"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By signing up, you agree to receive updates about new inventory and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AutoPrime"
          columns={[
            {
              items: [
                { label: "Inventory", href: "product" },
                { label: "Financing", href: "pricing" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Test Drive", href: "contact" },
                { label: "Support", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "https://autoprime.com/privacy" },
                { label: "Terms of Service", href: "https://autoprime.com/terms" },
                { label: "Careers", href: "https://autoprime.com/careers" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}