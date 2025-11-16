import ListedPropertiesContainer from "./ListedPropertiesContainer/ListedPropertiesContainer";
import ListedPropertiesHero from "./ListedPropertiesHero/ListedPropertiesHero";

const ListedProperties = () => {
  return (
    <div>
      <title>Listed Properties</title>
      <section>
        <ListedPropertiesHero />
      </section>
      <section>
        <ListedPropertiesContainer />;
      </section>
    </div>
  );
};

export default ListedProperties;
