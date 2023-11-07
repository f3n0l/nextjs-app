// pages/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
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

export const getStaticPaths: GetStaticPaths = async () => {
    // Define the possible dynamic routes here
    const paths = ["/route1", "/route2", "/route3", "/custom-route"]; // Add your actual routes
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const data = await fetchData(slug);
    return { props: { data } };
};

export default DynamicRoutePage;
