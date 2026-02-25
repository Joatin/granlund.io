"use client"

import {
  Container,
  Heading,
  HStack,
  Stack,
  Button,
  GridItem,
  Grid,
  Image,
  Text,
  Link,
  Timeline,
  ButtonGroup
} from "@chakra-ui/react";
import NextImage from "next/image";
import profileSrc from "../../public/profile.jpg"
import {LuSparkles} from "react-icons/lu";

const prompt = "Läs CV:et från den här websidan: https://granlund.io och berätta om den här konsultet kan vara rätt för rollen som jag har"

export default function Home() {

  return (
      <Container py={8} maxW={"6xl"}>
        <Grid templateColumns={{lg: "repeat(4, 1fr)"}} gap={8}>
          <GridItem colSpan={1}>
            <Stack>
              <Image rounded="md" asChild>
                <NextImage src={profileSrc} alt="Joatin Granlund" />
              </Image>
              <Stack mt={4}>
                <Heading>Kontaktuppgifter</Heading>
                <Stack gap={0}>
                  <Text textStyle={"sm"} color={"fg.muted"}>Telefon</Text>
                  <Text>070-669 04 76</Text>
                </Stack>
                <Stack gap={0}>
                  <Text textStyle={"sm"} color={"fg.muted"}>E-post</Text>
                  <Text>joatin@granlund.io</Text>
                </Stack>
                <Stack gap={0}>
                  <Text textStyle={"sm"} color={"fg.muted"}>LinkedIn</Text>
                  <Link href={"https://linkedin.com/in/joatin"}>linkedin.com/in/joatin</Link>
                </Stack>
                <Stack gap={0}>
                  <Text textStyle={"sm"} color={"fg.muted"}>Hemsida</Text>
                  <Link href={"https://granlund.io"}>granlund.io</Link>
                </Stack>
              </Stack>
              <Stack mt={4}>
                <Heading>Färdigheter</Heading>
                <Text textStyle={"md"}>Agile/SAFe</Text>
                <Text textStyle={"md"}>AI/ML Integration</Text>
                <Text textStyle={"md"}>Tekniskt Ledarskap</Text>
                <Text textStyle={"md"}>React/React Native</Text>
                <Text textStyle={"md"}>Typescript</Text>
              </Stack>
              <Stack mt={4}>
                <Heading>Språk</Heading>
                <Text textStyle={"md"}>Svenska</Text>
                <Text textStyle={"md"}>Engelska</Text>
              </Stack>

            </Stack>

          </GridItem>
          <GridItem colSpan={3}>
            <Stack>
              <Stack direction={{lg: "row", base: "column"}} justifyContent={"space-between"}>
                <Stack gap={0}>
                  <Heading size={"4xl"}>Joatin Granlund</Heading>
                  <Text ml={2} color={"fg.muted"}>Senior Tech Lead</Text>
                </Stack>
                <ButtonGroup>
                  <Button variant="outline" color={"fg.muted"} asChild>
                    <a href={`https://chat.openai.com/?model=gpt-4&q=${encodeURI(prompt)}`} target={"_blank"}>
                      <LuSparkles />
                      Ask ChatGPT
                    </a>
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
            <Stack my={4}>
              <Text>
                Jag är senior tech lead och systemarkitekt med över 10 års erfarenhet av att leda och modernisera
                komplexa backend‑ och cloud‑lösningar i enterprise‑miljöer. Jag har drivit leveranser, designat
                robusta system i AWS och Azure, och coachat team mot leverans och hållbar teknisk kvalitet.
                Jag hjälper organisationer att röra sig mot moderna molnarkitekturer, tekniska riktlinjer och
                skalbara plattformar med fokus på stabilitet, säkerhet och affärsnytta.
              </Text>
            </Stack>
            <Stack my={8}>
              <Heading>Erfarenhet</Heading>
              <Timeline.Root size={"md"}>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Tre</Timeline.Title>
                    <Timeline.Description>2024-2025</Timeline.Description>
                    <Text textStyle="sm">
                      Jag var en del av ett team på Tre som utvecklade ett internt säljstöd med Next.js och
                      Contentful. Jag arbetade med både frontend- och backend-komponenter och bidrog till att leverera
                      en stabil och användarvänlig plattform. Projektet förbättrade säljarens arbetsflöden och
                      möjliggjorde effektivare beslut, och jag kunde säkerställa hög kodkvalitet och smidiga leveranser
                      genom hela utvecklingscykeln.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Postnord</Timeline.Title>
                    <Timeline.Description>Senior Tech Lead - 2023-2024</Timeline.Description>
                    <Text textStyle="sm">
                      Jag förbättrade teamets tekniska kompetens och agila arbetssätt, vilket ledde till snabbare
                      leveranser och högre kodkvalitet. Jag arbetade aktivt med utveckling i Angular, Java och Quarkus,
                      samtidigt som jag optimerade miljön på OpenShift med Docker. Genom mentorskap och workshops höjde
                      jag teamets kompetens och samarbete, och jag ledde utvecklingen av ett pålitligt
                      track-and-trace-verktyg som levererades effektivt och uppskattades av användarna. Resultatet blev
                      ett högpresterande team med förbättrade processer och tydliga resultat.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Efuel</Timeline.Title>
                    <Timeline.Description>Senior Full-Stack Developer - 2022-2023</Timeline.Description>
                    <Text textStyle="sm">
                      Efuel är en ledande nordisk distributör av laddstationer och andra produkter för e-mobilitet. Jag
                      var en del av App-teamet och hjälpte till att etablera Efuel-appen med alla tillhörande
                      backend-system. Appen stöder användare i att fatta smarta energirelaterade beslut i vardagen. Jag
                      arbetade med appen i React Native och bidrog även med att skriva pipelines, Terraform-mallar samt
                      utveckla backend-system som OCPP-gateways för att stödja appens funktionalitet.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Klarna</Timeline.Title>
                    <Timeline.Description>Senior Full-Stack Developer - 2021-2022</Timeline.Description>
                    <Text textStyle="sm">
                      Jag arbetar i App-domänen med att stödja Klarnas innovativa engångskortsfunktion, både på app-
                      och backend-sidan. Som fullstackutvecklare bidrar jag med utveckling i TypeScript och React
                      Native, vilket gör att jag kan leverera lösningar som förbättrar både användarupplevelsen och
                      backend-tjänsterna.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>H&M</Timeline.Title>
                    <Timeline.Description>Senior DevOps Engineer - 2020-2021</Timeline.Description>
                    <Text textStyle="sm">
                      Jag var en del av H&Ms Deep Analytics & AI-domän, där vi samlade in och analyserade data från
                      alla lager världen över. Som medlem i kärnteamet hjälpte jag analytiker och ingenjörer med frågor
                      kring datalake och Spark. När jag började i domänen hade de flesta teamen knappt erfarenhet av
                      Terraform, och när jag lämnade hade jag hjälpt över 60 % av teamen att börja använda Terraform
                      i sina pipelines.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>SVT</Timeline.Title>
                    <Timeline.Description>Senior Software Developer - 2019-2020</Timeline.Description>
                    <Text textStyle="sm">
                      Jag var del av ett team som planerade och utvecklade SVT:s nya arkivsystem, kapabelt att lagra
                      över 20 PB video, med funktioner som AI-baserad taggning. Trots utmaningar med äldre system
                      levererade vi en plattform som uppfyllde alla krav, och hela systemet skrevs i Rust, förutom GUI.
                      Under tiden på SVT arbetade jag även med förbättringar och utveckling på SVT Play, vilket gav mig
                      erfarenhet av både backend och användargränssnitt i en produkt med stor publik.
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Klarna</Timeline.Title>
                    <Timeline.Description>Software Developer - 2018</Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Discovery Inc</Timeline.Title>
                    <Timeline.Description>Frontend Developer - 2018</Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Fortum</Timeline.Title>
                    <Timeline.Description>Full-Stack Developer - 2017-2018</Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>Fraktal Consulting</Timeline.Title>
                    <Timeline.Description>Full-Stack Developer - 2015-2017</Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline.Root>
            </Stack>
          </GridItem>
        </Grid>

      </Container>
  );
}
