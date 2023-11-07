import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const fetchData = async (slug: string) => {
    // Fetch data for the given slug (e.g., from an API or database)
    const data = `Data for ${slug}`;
    return data;
};

const DynamicRoutePage: React.FC<{ data: string }> = ({ data }) => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Dynamic Route: {slug}</h1>
            <p>Data: {data}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const slug = params?.slug as string;
    const data = await fetchData(slug);
    return { props: { data } };
};

export default DynamicRoutePage;
