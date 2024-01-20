import SingleItinerary from "@/components/SingleItinerary";
import { useRouter } from "next/router";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";


const Page = () => {
  const router = useRouter()
  console.log(router.query.id)
  return <SingleItinerary itineraryId={router.query.id}/>
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
