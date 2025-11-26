import {Container} from "@/shared/ui/container";
import {BannerSale} from "@/widgets/BannerSale";
import {Topbar} from "@/widgets/Topbar";

export default function Home() {
    return (
        <>
            <Container>
                <BannerSale/>
            </Container>
            <Topbar/>
        </>
    );
}
