import { BlogItem } from "@/app/components/shared/BlogItem";
import { blogs } from "@/app/data";
import SectionHeading from "@/app/components/shared/SectionHeading";
import CustomButton from "@/app/components/ui/CustomButton";

export default function Blogs() {
    return (
        <section id="blogs" className="mb-24 lg:mb-40 scroll-mt-24">
            <SectionHeading>Latest Writing</SectionHeading>

            <div className="space-y-2">
                {blogs.length > 0 ? (
                    blogs.slice(0, 2).map((blog) => (
                        <BlogItem
                            key={blog.title}
                            {...blog}
                            showImage={false}
                        />
                    ))
                ) : (
                    /* Coming Soon Placeholder */
                    <div
                        className="py-12 text-center rounded-lg border-dashed"
                        style={{
                            borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)",
                            backgroundColor: "color-mix(in oklab, var(--background) 85%, transparent)",
                            borderWidth: "1px",
                        }}
                    >
                        <p
                            className="font-playfair italic text-lg"
                            style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}
                        >
                            Thoughtful essays coming soon...
                        </p>
                    </div>
                )}
            </div>

            {blogs.length > 2 && (
                <div className="mt-4">
                    <CustomButton href="/blogs">
                        View More Blogs
                    </CustomButton>
                </div>
            )}
        </section>
    );
}

