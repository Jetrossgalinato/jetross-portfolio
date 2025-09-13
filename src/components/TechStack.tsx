interface TechItem {
  name: string;
  iconUrl: string;
  hoverIconUrl: string;
  color: string;
  bgColor: string;
}

export default function TechStackComponent() {
  const techStack: TechItem[] = [
    {
      name: "HTML",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%23767676' d='M14 90 6 0h88.2l-8 90L50 100'/%3E%3Cpath fill='%23888' d='M50.1 92.3v-85h36l-6.9 76.8'/%3E%3Cpath fill='%23EBEBEB' d='M22.4 18.4h27.7v11H34.5l1 11.3h14.6v11H25.4zm3.5 38.9H37l.8 8.8 12.3 3.3v11.5l-22.7-6.3'/%3E%3Cpath fill='%23fff' d='M77.7 18.4H50v11h26.6zm-2 22.3H50v11h13.6L62.3 66 50 69.4v11.5l22.6-6.3'/%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%23E44D26' d='M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100'/%3E%3Cpath fill='%23F16529' d='M50.093 92.344V7.39h36.048l-6.88 76.811'/%3E%3Cpath fill='%23EBEBEB' d='M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32'/%3E%3Cpath fill='%23fff' d='M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271'/%3E%3C/svg%3E",
      color: "text-orange-600",
      bgColor: "",
    },
    {
      name: "CSS",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%23525252' d='m94.2 0-8 90L50 100 14 90 6 0z'/%3E%3Cpath fill='%23626262' d='m79.3 84.3 6.9-76.9h-36v85z'/%3E%3Cpath fill='%23EBEBEB' d='m24.4 40.7 1 11h24.7v-11zm25.7-22.3H22.4l1 11h26.7zm0 62.5V69.4l-12.3-3.3-.8-8.8H25.9l1.5 17.3z'/%3E%3Cpath fill='%23fff' d='m63.6 51.8-1.3 14.3L50 69.4v11.5l22.6-6.3.2-1.9 2.6-29.1.3-3 2-22.3H50v11h15.6l-1 11.3H50v11h13.6z'/%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%231572B6' d='m94.2 0-8 90L50 100 14 90 6 0z'/%3E%3Cpath fill='%2333A9DC' d='m79.3 84.3 6.9-76.9h-36v85z'/%3E%3Cpath fill='%23EBEBEB' d='m24.4 40.7 1 11h24.7v-11zm25.7-22.3H22.4l1 11h26.7zm0 62.5V69.4l-12.3-3.3-.8-8.8H25.9l1.5 17.3z'/%3E%3Cpath fill='%23fff' d='m63.6 51.8-1.3 14.3L50 69.4v11.5l22.6-6.3.2-1.9 2.6-29.1.3-3 2-22.3H50v11h15.6l-1 11.3H50v11h13.6z'/%3E%3C/svg%3E",
      color: "text-blue-600",
      bgColor: "",
    },
    {
      name: "TypeScript",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%235F5F5F' d='M0 0h100v100H0z'/%3E%3Cpath fill='%23fff' d='M48 37h4.8v8.3h-13v36.8l-.3.1c-.5.1-6.6.1-8 0l-1.1-.1V45.3h-13V37zm36.6 41.3c-1.9 2-4 3.1-7.4 4.1-1.5.4-1.7.4-5.1.4-3.3 0-3.6 0-5.2-.4-4.2-1.1-7.6-3.2-9.9-6.2-.7-.8-1.7-2.6-1.7-2.8 0-.1.2-.2.4-.3s.6-.4 1-.6c.3-.2 1-.6 1.4-.8s1.6-.9 2.7-1.6c1.1-.6 2-1.2 2.1-1.2s.3.2.5.5c.9 1.6 3.1 3.6 4.7 4.3 1 .4 3.1.9 4.1.9.9 0 2.7-.4 3.6-.8 1-.5 1.5-.9 2.1-1.8.4-.6.5-.8.4-2 0-1.1-.1-1.4-.4-2-.9-1.4-2.1-2.2-6.9-4.3-5-2.2-7.2-3.5-9-5.3-1.3-1.3-1.6-1.7-2.5-3.3-1.1-2.1-1.2-2.8-1.2-5.9 0-2.2 0-2.9.3-3.7.3-1.1 1.4-3.3 1.9-3.8 1-1.2 1.4-1.5 2.1-2.1 2.1-1.8 5.4-2.9 8.6-3 .4 0 1.5.1 2.7.1 3.2.3 5.4 1 7.5 2.7 1.6 1.2 4 4.2 3.7 4.6-.2.2-6.4 4.4-6.8 4.5-.2.1-.4 0-.8-.4-2.1-2.5-3-3.1-5-3.2-1.5-.1-2.2.1-3.2.7-1 .7-1.5 1.7-1.5 3.2 0 2.1.8 3.1 3.8 4.6 1.9 1 3.6 1.7 3.7 1.7.2 0 4.2 2 5.2 2.6 4.9 2.9 6.9 5.8 7.4 10.9.1 3.7-.9 7.2-3.3 9.7'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23007ACC' d='M0 0h100v100H0z'/%3E%3Cpath fill='%23fff' d='M48 37h4.8v8.3h-13v36.8l-.3.1c-.5.1-6.6.1-8 0l-1.1-.1V45.3h-13V37zm36.6 41.3c-1.9 2-4 3.1-7.4 4.1-1.5.4-1.7.4-5.1.4-3.3 0-3.6 0-5.2-.4-4.2-1.1-7.6-3.2-9.9-6.2-.7-.8-1.7-2.6-1.7-2.8 0-.1.2-.2.4-.3s.6-.4 1-.6c.3-.2 1-.6 1.4-.8s1.6-.9 2.7-1.6c1.1-.6 2-1.2 2.1-1.2s.3.2.5.5c.9 1.6 3.1 3.6 4.7 4.3 1 .4 3.1.9 4.1.9.9 0 2.7-.4 3.6-.8 1-.5 1.5-.9 2.1-1.8.4-.6.5-.8.4-2 0-1.1-.1-1.4-.4-2-.9-1.4-2.1-2.2-6.9-4.3-5-2.2-7.2-3.5-9-5.3-1.3-1.3-1.6-1.7-2.5-3.3-1.1-2.1-1.2-2.8-1.2-5.9 0-2.2 0-2.9.3-3.7.3-1.1 1.4-3.3 1.9-3.8 1-1.2 1.4-1.5 2.1-2.1 2.1-1.8 5.4-2.9 8.6-3 .4 0 1.5.1 2.7.1 3.2.3 5.4 1 7.5 2.7 1.6 1.2 4 4.2 3.7 4.6-.2.2-6.4 4.4-6.8 4.5-.2.1-.4 0-.8-.4-2.1-2.5-3-3.1-5-3.2-1.5-.1-2.2.1-3.2.7-1 .7-1.5 1.7-1.5 3.2 0 2.1.8 3.1 3.8 4.6 1.9 1 3.6 1.7 3.7 1.7.2 0 4.2 2 5.2 2.6 4.9 2.9 6.9 5.8 7.4 10.9.1 3.7-.9 7.2-3.3 9.7'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      color: "text-blue-500",
      bgColor: "",
    },
    {
      name: "Next.js",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23000' d='M50 100c27.6 0 50-22.4 50-50S77.6 0 50 0 0 22.4 0 50s22.4 50 50 50'/%3E%3Cpath fill='url(%23b)' d='M83.1 87.5 38.4 30H30v40h6.7V38.5l41 53c1.9-1.2 3.7-2.5 5.4-4'/%3E%3Cpath fill='url(%23c)' d='M70.6 30h-6.7v40h6.7z'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='51.794' x2='71.517' y1='71.791' y2='96.235' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='67.299' x2='67.187' y1='29.987' y2='59.362' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23000' d='M50 100c27.6 0 50-22.4 50-50S77.6 0 50 0 0 22.4 0 50s22.4 50 50 50'/%3E%3Cpath fill='url(%23b)' d='M83.1 87.5 38.4 30H30v40h6.7V38.5l41 53c1.9-1.2 3.7-2.5 5.4-4'/%3E%3Cpath fill='url(%23c)' d='M70.6 30h-6.7v40h6.7z'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='51.794' x2='71.517' y1='71.791' y2='96.235' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='67.299' x2='67.187' y1='29.987' y2='59.362' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      color: "text-gray-900 dark:text-white",
      bgColor: "",
    },
    {
      name: "Tailwind CSS",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%23848484' d='M50 20c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.7-9.5-6.8C68.1 25.8 62.4 20 50 20M25 50C11.7 50 3.3 56.7 0 70c5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-.9-6.5-3.7-9.5-6.8C43.1 55.8 37.4 50 25 50'/%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%2306B6D4' d='M50 20c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.7-9.5-6.8C68.1 25.8 62.4 20 50 20M25 50C11.7 50 3.3 56.7 0 70c5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-.9-6.5-3.7-9.5-6.8C43.1 55.8 37.4 50 25 50'/%3E%3C/svg%3E",
      color: "text-cyan-500",
      bgColor: "",
    },
    {
      name: "Supabase",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='url(%23a)' d='M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z'/%3E%3Cpath fill='url(%23b)' fill-opacity='.2' d='M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z'/%3E%3Cpath fill='%239C9C9C' d='M41.5 1.7c2.6-3.2 7.7-1.5 7.8 2.7l.4 60.1H9.8C2.5 64.5-1.6 56 3 50.3z'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='45.952' x2='81.857' y1='56.664' y2='71.723' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236C6C6C'/%3E%3Cstop offset='1' stop-color='%239C9C9C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='47.672' x2='64.047' y1='19.483' y2='50.308' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='url(%23a)' d='M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z'/%3E%3Cpath fill='url(%23b)' fill-opacity='.2' d='M57.9 98.3c-2.6 3.2-7.7 1.5-7.8-2.7l-.9-60.1h40.4c7.3 0 11.4 8.5 6.8 14.2z'/%3E%3Cpath fill='%233ECF8E' d='M41.5 1.7c2.6-3.2 7.7-1.5 7.8 2.7l.4 60.1H9.8C2.5 64.5-1.6 56 3 50.3z'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='45.952' x2='81.857' y1='56.664' y2='71.723' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%233ECF8E'/%3E%3Cstop offset='1' stop-color='%23249361'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='47.672' x2='64.047' y1='19.483' y2='50.308' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
      color: "text-green-600",
      bgColor: "",
    },
    {
      name: "React.js",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%23B9B9B9' d='M49.802 58.8c4.852 0 8.713-3.9 8.713-8.8s-3.861-8.8-8.713-8.8-8.713 3.9-8.713 8.8 3.861 8.8 8.713 8.8'/%3E%3Cpath stroke='%23B9B9B9' stroke-width='5' d='M49.802 68.1c25.842 0 46.832-8.1 46.832-18.1s-20.99-18.1-46.832-18.1S2.97 40 2.97 50s20.99 18.1 46.832 18.1Z'/%3E%3Cpath stroke='%23B9B9B9' stroke-width='5' d='M34.356 59c12.872 22.7 30.297 37 38.911 32 8.515-5 5.05-27.4-7.92-50C52.377 18.3 34.95 4 26.436 9c-8.614 5-5.05 27.4 7.92 50Z'/%3E%3Cpath stroke='%23B9B9B9' stroke-width='5' d='M34.357 41c-12.97 22.6-16.436 45-7.921 50 8.514 5 25.94-9.3 38.812-32 12.97-22.6 16.534-45 8.02-50-8.615-5-26.04 9.3-38.912 32Z'/%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cpath fill='%2361DAFB' d='M49.802 58.8c4.852 0 8.713-3.9 8.713-8.8s-3.861-8.8-8.713-8.8-8.713 3.9-8.713 8.8 3.861 8.8 8.713 8.8'/%3E%3Cpath stroke='%2361DAFB' stroke-width='5' d='M49.802 68.1c25.842 0 46.832-8.1 46.832-18.1s-20.99-18.1-46.832-18.1S2.97 40 2.97 50s20.99 18.1 46.832 18.1Z'/%3E%3Cpath stroke='%2361DAFB' stroke-width='5' d='M34.356 59c12.872 22.7 30.297 37 38.911 32 8.515-5 5.05-27.4-7.92-50C52.377 18.3 34.95 4 26.436 9c-8.614 5-5.05 27.4 7.92 50Z'/%3E%3Cpath stroke='%2361DAFB' stroke-width='5' d='M34.357 41c-12.97 22.6-16.436 45-7.921 50 8.514 5 25.94-9.3 38.812-32 12.97-22.6 16.534-45 8.02-50-8.615-5-26.04 9.3-38.912 32Z'/%3E%3C/svg%3E",
      color: "text-cyan-400",
      bgColor: "",
    },
    {
      name: "Python",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='url(%23b)' d='M49.6 0C24.3 0 25.8 11 25.8 11v11.4H50v3.4H16.2S0 24 0 49.6s14.2 24.7 14.2 24.7h8.5V62.4s-.5-14.2 14-14.2h24s13.5.2 13.5-13V13.3c-.1 0 2-13.3-24.6-13.3M36.3 7.7c.6 0 1.1.1 1.7.3.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3-1.1-.1-1.7-.3-1-.5-1.4-.9-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3'/%3E%3Cpath fill='url(%23c)' d='M50.4 99.5c25.4 0 23.8-11 23.8-11V77.1H49.9v-3.4h33.8s16.2 1.8 16.2-23.8-14.2-24.7-14.2-24.7h-8.5V37s.5 14.2-14 14.2h-24s-13.5-.2-13.5 13v21.9c.2.1-1.9 13.4 24.7 13.4m13.3-7.7c-.6 0-1.1-.1-1.7-.3-.5-.2-1-.5-1.4-.9s-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3 1.1.1 1.7.3c.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='9.308' x2='58.865' y1='9.253' y2='58.316' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236F6F6F'/%3E%3Cstop offset='1' stop-color='%235E5E5E'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='39.745' x2='92.964' y1='40.752' y2='91.061' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DADADA'/%3E%3Cstop offset='1' stop-color='%23C5C5C5'/%3E%3C/linearGradient%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      hoverIconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='url(%23b)' d='M49.6 0C24.3 0 25.8 11 25.8 11v11.4H50v3.4H16.2S0 24 0 49.6s14.2 24.7 14.2 24.7h8.5V62.4s-.5-14.2 14-14.2h24s13.5.2 13.5-13V13.3c-.1 0 2-13.3-24.6-13.3M36.3 7.7c.6 0 1.1.1 1.7.3.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3-1.1-.1-1.7-.3-1-.5-1.4-.9-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3'/%3E%3Cpath fill='url(%23c)' d='M50.4 99.5c25.4 0 23.8-11 23.8-11V77.1H49.9v-3.4h33.8s16.2 1.8 16.2-23.8-14.2-24.7-14.2-24.7h-8.5V37s.5 14.2-14 14.2h-24s-13.5-.2-13.5 13v21.9c.2.1-1.9 13.4 24.7 13.4m13.3-7.7c-.6 0-1.1-.1-1.7-.3-.5-.2-1-.5-1.4-.9s-.7-.9-.9-1.4-.3-1.1-.3-1.7.1-1.1.3-1.7c.2-.5.5-1 .9-1.4s.9-.7 1.4-.9 1.1-.3 1.7-.3 1.1.1 1.7.3c.5.2 1 .5 1.4.9s.7.9.9 1.4.3 1.1.3 1.7-.1 1.1-.3 1.7c-.2.5-.5 1-.9 1.4s-.9.7-1.4.9-1.1.3-1.7.3'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='9.308' x2='58.865' y1='9.253' y2='58.316' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23387EB8'/%3E%3Cstop offset='1' stop-color='%23366994'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='39.745' x2='92.964' y1='40.752' y2='91.061' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFE052'/%3E%3Cstop offset='1' stop-color='%23FFC331'/%3E%3C/linearGradient%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v100H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      color: "text-yellow-500",
      bgColor: "",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`${tech.bgColor} rounded-xl p-2 mb-3 transition-all duration-300 group-hover:scale-110`}
              >
                {/* Default Icon */}
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0 absolute"
                />
                {/* Hover Icon */}
                <img
                  src={tech.hoverIconUrl}
                  alt={tech.name}
                  className="w-5 h-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>

              <p className="text-gray-900 dark:text-white text-xs font-medium">
                {tech.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
