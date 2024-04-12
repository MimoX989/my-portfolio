import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className=" items-center justify-center gap-4">
      <div className="grid grid-cols-12 gap-4 p-1">
        <div className="col-span-12 rounded-lg border border-gray-400 p-8 sm:col-span-4">
          <div className="inline-block text-center justify-center">
            <h1 className={title({ color: "violet", size: "sm" })}>
              Hi There,
            </h1>
            <h1 className={title({ size: "sm" })}>its &nbsp;</h1>
            <br />
            <h1 className={title()}>Abhishek Kachhap</h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              You can call me Abhi.
            </h2>
            <br />
            <h1 className={title({ size: "sm" })}>
              I am&nbsp;
              <span className="type-profession"></span>
            </h1>
          </div>

          <div className="flex justify-center gap-3 mt-3">
            <Link
              isExternal
              href={siteConfig.links.projects}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              View Projects
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>

          <div className="flex justify-center mt-8">
            <Snippet hideSymbol hideCopyButton variant="flat">
              <span>
                Welcome to my <Code color="primary">website</Code>
              </span>
            </Snippet>
          </div>
        </div>
        <div className="col-span-12 rounded-lg border border-gray-500  p-32 sm:col-span-8">
          " Content under development! " <br /> Please visit later :)
        </div>
      </div>
    </section>
  );
}
