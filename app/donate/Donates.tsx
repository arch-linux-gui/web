"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getUserCountry } from "@/lib/getUserCountry";
import { Check, Code, Copy, Cpu, Server } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EnhancedDonationPage() {
  const [isIndianUser, setIsIndianUser] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkUserCountry() {
      const country = await getUserCountry();
      setIsIndianUser(country === "IN");
    }
    checkUserCountry();
  }, []);

  const cryptoAddresses: any = {
    Bitcoin: "bc1q4jmgkezdn7d4rqg83d9egch7adwzr2lp4lrdwj",
    Ethereum: "0x3CdB1dF5CeA437280BD8C33d05BCFd0CFCcBD970",
    Solana: "3ttWgLCPMNbxSyjCgtoPvUHkvSj5Vey1pYKzmzrkhzdz",
  };

  const copyToClipboard = (crypto: any) => {
    navigator.clipboard.writeText(cryptoAddresses[crypto]);
    setCopiedCrypto(crypto);
    setTimeout(() => setCopiedCrypto(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/alg-logo.png"
          alt="Arka Linux GUI Logo"
          width={100}
          height={100}
          className="rounded-lg shadow-lg mr-4"
        />
        <h1 className="text-3xl font-bold text-center">Support Our Project</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Support Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Your donations help us continue our mission to provide high-quality,
            open-source software to the community. Here's how your contributions
            make a difference:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Maintain and improve our existing projects</li>
            <li>Develop new features and tools</li>
            <li>Ensure our software remains free and accessible to all</li>
            <li>Support our dedicated team of developers</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">How We Use Your Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Server className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-semibold">Server Costs</h3>
                <p className="text-sm text-gray-600">
                  Hosting and maintaining our infrastructure
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Code className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-semibold">Developer Support</h3>
                <p className="text-sm text-gray-600">
                  Compensating our talented developers
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Cpu className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-semibold">Hardware</h3>
                <p className="text-sm text-gray-600">
                  Upgrading and maintaining equipment
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Traditional Donations</CardTitle>
            <CardDescription>
              Support us with traditional payment methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isIndianUser && (
              <div className="space-y-2">
                <Label htmlFor="cashfree-amount">Cashfree (INR)</Label>
                <div className="flex space-x-2">
                  <Button
                    className="w-full bg-[#F1581C] hover:bg-[#f1581cd4] text-white"
                    onClick={() =>
                      router.push(
                        "https://payments-test.cashfree.com/forms/alg-donate"
                      )
                    }
                  >
                    <Image
                      src="/cashfree.png"
                      alt="Cashfree"
                      width={30}
                      height={30}
                      className="w-8 h-6 mr-2"
                    />
                    Donate with Cashfree
                  </Button>
                </div>
              </div>
            )}
            {isIndianUser && <Separator />}
            <div className="space-y-2">
              <Label>Buy Me a Coffee</Label>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                <Image
                  src="/bmc.png"
                  alt="Buy Me a Coffee"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                Buy Me a Coffee
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Librepay (Monthly)</Label>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Image
                  src="/liberapay.png"
                  alt="Liberapay"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                Donate on Librepay
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Cryptocurrency Donations</CardTitle>
            <CardDescription>
              Support us with your preferred cryptocurrency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TooltipProvider>
              {Object.entries(cryptoAddresses).map(([crypto, address]) => (
                <div key={crypto} className="space-y-2">
                  <Label htmlFor={`${crypto}-address`}>{crypto}</Label>
                  <div className="flex space-x-2">
                    <Input
                      id={`${crypto}-address`}
                      readOnly
                      value={address as string}
                    />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => copyToClipboard(crypto)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          aria-label={`Copy ${crypto} address`}
                        >
                          {copiedCrypto === crypto ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copiedCrypto === crypto ? "Copied!" : "Copy"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
